'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { 
  PageSchema, SectionModel, ElementModel, ViewportMode, 
  GlobalStyleConfig, RevisionHistoryItem, initialHomePageSchema, initialGlobalStyles 
} from '@/data/visual-editor-store';

interface EditorContextType {
  pageSchema: PageSchema;
  viewport: ViewportMode;
  setViewport: (vp: ViewportMode) => void;
  selectedElementId: string | null;
  setSelectedElementId: (id: string | null) => void;
  selectedSectionId: string | null;
  setSelectedSectionId: (id: string | null) => void;
  hoveredElementId: string | null;
  setHoveredElementId: (id: string | null) => void;
  hoveredSectionId: string | null;
  setHoveredSectionId: (id: string | null) => void;
  isInlineEditing: boolean;
  setIsInlineEditing: (editing: boolean) => void;
  isPreviewMode: boolean;
  setIsPreviewMode: (preview: boolean) => void;
  
  // Modals & Panels
  mediaLibraryOpen: boolean;
  setMediaLibraryOpen: (open: boolean) => void;
  mediaSelectTarget: { elementId: string; field: 'src' | 'poster' | 'videoUrl' } | null;
  openMediaLibraryForTarget: (elementId: string, field: 'src' | 'poster' | 'videoUrl') => void;
  
  seoDrawerOpen: boolean;
  setSeoDrawerOpen: (open: boolean) => void;
  
  globalStylesOpen: boolean;
  setGlobalStylesOpen: (open: boolean) => void;
  
  revisionsModalOpen: boolean;
  setRevisionsModalOpen: (open: boolean) => void;

  globalStyles: GlobalStyleConfig;
  setGlobalStyles: (styles: GlobalStyleConfig) => void;
  
  // History Undo/Redo
  canUndo: boolean;
  canRedo: boolean;
  undo: () => void;
  redo: () => void;
  
  // Status
  saveStatus: 'saved' | 'saving' | 'dirty';
  revisions: RevisionHistoryItem[];

  // Actions
  updateElement: (id: string, partial: Partial<ElementModel>) => void;
  updateElementContent: (id: string, contentPartial: Record<string, any>) => void;
  updateElementStyle: (id: string, stylePartial: Record<string, any>) => void;
  addElementToSection: (sectionId: string, newElement: ElementModel) => void;
  deleteElement: (id: string) => void;
  duplicateElement: (id: string) => void;
  moveElement: (id: string, direction: 'up' | 'down') => void;
  
  updateSection: (id: string, partial: Partial<SectionModel>) => void;
  addSection: (newSection: SectionModel) => void;
  deleteSection: (id: string) => void;
  moveSection: (id: string, direction: 'up' | 'down') => void;
  
  updateSeo: (seoData: { title?: string; seoTitle?: string; seoDescription?: string; ogImage?: string; slug?: string }) => void;
  saveDraft: () => void;
  publishPage: () => void;
  restoreRevision: (version: number) => void;
}

const EditorContext = createContext<EditorContextType | undefined>(undefined);

export function EditorProvider({ children }: { children: React.ReactNode }) {
  const [pageSchema, setPageSchema] = useState<PageSchema>(initialHomePageSchema);
  const [history, setHistory] = useState<PageSchema[]>([initialHomePageSchema]);
  const [historyIndex, setHistoryIndex] = useState(0);
  
  const [viewport, setViewport] = useState<ViewportMode>('desktop');
  const [selectedElementId, setSelectedElementId] = useState<string | null>(null);
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(null);
  const [hoveredElementId, setHoveredElementId] = useState<string | null>(null);
  const [hoveredSectionId, setHoveredSectionId] = useState<string | null>(null);
  
  const [isInlineEditing, setIsInlineEditing] = useState(false);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'saved' | 'saving' | 'dirty'>('saved');

  // Modals
  const [mediaLibraryOpen, setMediaLibraryOpen] = useState(false);
  const [mediaSelectTarget, setMediaSelectTarget] = useState<{ elementId: string; field: 'src' | 'poster' | 'videoUrl' } | null>(null);
  const [seoDrawerOpen, setSeoDrawerOpen] = useState(false);
  const [globalStylesOpen, setGlobalStylesOpen] = useState(false);
  const [revisionsModalOpen, setRevisionsModalOpen] = useState(false);
  
  const [globalStyles, setGlobalStyles] = useState<GlobalStyleConfig>(initialGlobalStyles);
  
  const [revisions, setRevisions] = useState<RevisionHistoryItem[]>([
    { version: 5, timestamp: 'Bugün 05:30', note: 'Canlı Sürüm (Güncel)', schema: initialHomePageSchema },
    { version: 4, timestamp: 'Dün 18:20', note: 'Hero başlığı güncellendi', schema: initialHomePageSchema },
    { version: 3, timestamp: '05 Ekim 14:15', note: 'Reels lab bölümü eklendi', schema: initialHomePageSchema },
  ]);

  // Load saved state from LocalStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('altun_visual_editor_schema');
      if (saved) {
        const parsed = JSON.parse(saved);
        setPageSchema(parsed);
        setHistory([parsed]);
      }
    } catch (err) {
      console.error('Failed to load visual editor state', err);
    }
  }, []);

  // Update history helper
  const pushState = useCallback((newSchema: PageSchema) => {
    setPageSchema(newSchema);
    setSaveStatus('dirty');
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newSchema);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  }, [history, historyIndex]);

  const undo = () => {
    if (historyIndex > 0) {
      const prev = history[historyIndex - 1];
      setHistoryIndex(historyIndex - 1);
      setPageSchema(prev);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      const next = history[historyIndex + 1];
      setHistoryIndex(historyIndex + 1);
      setPageSchema(next);
    }
  };

  const openMediaLibraryForTarget = (elementId: string, field: 'src' | 'poster' | 'videoUrl') => {
    setMediaSelectTarget({ elementId, field });
    setMediaLibraryOpen(true);
  };

  // Helper to find & clone elements
  const updateElement = (id: string, partial: Partial<ElementModel>) => {
    const updatedSections = pageSchema.sections.map((sec) => {
      const updateElements = (elements: ElementModel[]): ElementModel[] => {
        return elements.map((el) => {
          if (el.id === id) {
            return { ...el, ...partial };
          }
          if (el.children) {
            return { ...el, children: updateElements(el.children) };
          }
          return el;
        });
      };
      return { ...sec, elements: updateElements(sec.elements) };
    });

    pushState({ ...pageSchema, sections: updatedSections });
  };

  const updateElementContent = (id: string, contentPartial: Record<string, any>) => {
    const updatedSections = pageSchema.sections.map((sec) => {
      const updateElements = (elements: ElementModel[]): ElementModel[] => {
        return elements.map((el) => {
          if (el.id === id) {
            return { ...el, content: { ...el.content, ...contentPartial } };
          }
          if (el.children) {
            return { ...el, children: updateElements(el.children) };
          }
          return el;
        });
      };
      return { ...sec, elements: updateElements(sec.elements) };
    });

    pushState({ ...pageSchema, sections: updatedSections });
  };

  const updateElementStyle = (id: string, stylePartial: Record<string, any>) => {
    const updatedSections = pageSchema.sections.map((sec) => {
      const updateElements = (elements: ElementModel[]): ElementModel[] => {
        return elements.map((el) => {
          if (el.id === id) {
            const currentVpStyle = el.styles[viewport] || {};
            return {
              ...el,
              styles: {
                ...el.styles,
                [viewport]: { ...currentVpStyle, ...stylePartial },
              },
            };
          }
          if (el.children) {
            return { ...el, children: updateElements(el.children) };
          }
          return el;
        });
      };
      return { ...sec, elements: updateElements(sec.elements) };
    });

    pushState({ ...pageSchema, sections: updatedSections });
  };

  const addElementToSection = (sectionId: string, newElement: ElementModel) => {
    const updatedSections = pageSchema.sections.map((sec) => {
      if (sec.id === sectionId) {
        return { ...sec, elements: [...sec.elements, newElement] };
      }
      return sec;
    });

    pushState({ ...pageSchema, sections: updatedSections });
    setSelectedElementId(newElement.id);
  };

  const deleteElement = (id: string) => {
    const updatedSections = pageSchema.sections.map((sec) => {
      const removeElement = (elements: ElementModel[]): ElementModel[] => {
        return elements
          .filter((el) => el.id !== id)
          .map((el) => ({
            ...el,
            children: el.children ? removeElement(el.children) : undefined,
          }));
      };
      return { ...sec, elements: removeElement(sec.elements) };
    });

    if (selectedElementId === id) setSelectedElementId(null);
    pushState({ ...pageSchema, sections: updatedSections });
  };

  const duplicateElement = (id: string) => {
    const updatedSections = pageSchema.sections.map((sec) => {
      const dupElements = (elements: ElementModel[]): ElementModel[] => {
        const result: ElementModel[] = [];
        for (const el of elements) {
          result.push(el);
          if (el.id === id) {
            const clone: ElementModel = {
              ...JSON.parse(JSON.stringify(el)),
              id: `el-${Date.now()}`,
              label: `${el.label} (Kopya)`,
            };
            result.push(clone);
          }
          if (el.children) {
            el.children = dupElements(el.children);
          }
        }
        return result;
      };
      return { ...sec, elements: dupElements(sec.elements) };
    });

    pushState({ ...pageSchema, sections: updatedSections });
  };

  const moveElement = (id: string, direction: 'up' | 'down') => {
    const updatedSections = pageSchema.sections.map((sec) => {
      const idx = sec.elements.findIndex((el) => el.id === id);
      if (idx !== -1) {
        const targetIdx = direction === 'up' ? idx - 1 : idx + 1;
        if (targetIdx >= 0 && targetIdx < sec.elements.length) {
          const newEls = [...sec.elements];
          const [moved] = newEls.splice(idx, 1);
          newEls.splice(targetIdx, 0, moved);
          return { ...sec, elements: newEls };
        }
      }
      return sec;
    });

    pushState({ ...pageSchema, sections: updatedSections });
  };

  const updateSection = (id: string, partial: Partial<SectionModel>) => {
    const updatedSections = pageSchema.sections.map((sec) => {
      if (sec.id === id) {
        return { ...sec, ...partial };
      }
      return sec;
    });

    pushState({ ...pageSchema, sections: updatedSections });
  };

  const addSection = (newSection: SectionModel) => {
    pushState({
      ...pageSchema,
      sections: [...pageSchema.sections, newSection],
    });
    setSelectedSectionId(newSection.id);
  };

  const deleteSection = (id: string) => {
    const updatedSections = pageSchema.sections.filter((s) => s.id !== id);
    if (selectedSectionId === id) setSelectedSectionId(null);
    pushState({ ...pageSchema, sections: updatedSections });
  };

  const moveSection = (id: string, direction: 'up' | 'down') => {
    const idx = pageSchema.sections.findIndex((s) => s.id === id);
    if (idx !== -1) {
      const targetIdx = direction === 'up' ? idx - 1 : idx + 1;
      if (targetIdx >= 0 && targetIdx < pageSchema.sections.length) {
        const newSecs = [...pageSchema.sections];
        const [moved] = newSecs.splice(idx, 1);
        newSecs.splice(targetIdx, 0, moved);
        pushState({ ...pageSchema, sections: newSecs });
      }
    }
  };

  const updateSeo = (seoData: { title?: string; seoTitle?: string; seoDescription?: string; ogImage?: string; slug?: string }) => {
    pushState({
      ...pageSchema,
      ...seoData,
    });
  };

  const saveDraft = () => {
    setSaveStatus('saving');
    setTimeout(() => {
      const updated = { ...pageSchema, status: 'draft' as const, updatedAt: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }) };
      setPageSchema(updated);
      localStorage.setItem('altun_visual_editor_schema', JSON.stringify(updated));
      setSaveStatus('saved');
    }, 400);
  };

  const publishPage = () => {
    setSaveStatus('saving');
    setTimeout(() => {
      const newVer = pageSchema.version + 1;
      const updated: PageSchema = { 
        ...pageSchema, 
        version: newVer, 
        status: 'published', 
        updatedAt: 'Bugün ' + new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }) 
      };
      setPageSchema(updated);
      localStorage.setItem('altun_visual_editor_schema', JSON.stringify(updated));
      
      const newRev: RevisionHistoryItem = {
        version: newVer,
        timestamp: updated.updatedAt,
        note: `v${newVer} Yayına Alındı`,
        schema: updated,
      };
      setRevisions([newRev, ...revisions]);
      setSaveStatus('saved');
    }, 600);
  };

  const restoreRevision = (version: number) => {
    const found = revisions.find((r) => r.version === version);
    if (found) {
      pushState(found.schema);
      setRevisionsModalOpen(false);
    }
  };

  return (
    <EditorContext.Provider
      value={{
        pageSchema,
        viewport,
        setViewport,
        selectedElementId,
        setSelectedElementId,
        selectedSectionId,
        setSelectedSectionId,
        hoveredElementId,
        setHoveredElementId,
        hoveredSectionId,
        setHoveredSectionId,
        isInlineEditing,
        setIsInlineEditing,
        isPreviewMode,
        setIsPreviewMode,

        mediaLibraryOpen,
        setMediaLibraryOpen,
        mediaSelectTarget,
        openMediaLibraryForTarget,

        seoDrawerOpen,
        setSeoDrawerOpen,
        globalStylesOpen,
        setGlobalStylesOpen,
        revisionsModalOpen,
        setRevisionsModalOpen,

        globalStyles,
        setGlobalStyles,

        canUndo: historyIndex > 0,
        canRedo: historyIndex < history.length - 1,
        undo,
        redo,

        saveStatus,
        revisions,

        updateElement,
        updateElementContent,
        updateElementStyle,
        addElementToSection,
        deleteElement,
        duplicateElement,
        moveElement,

        updateSection,
        addSection,
        deleteSection,
        moveSection,

        updateSeo,
        saveDraft,
        publishPage,
        restoreRevision,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
}

export function useEditor() {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error('useEditor must be used within an EditorProvider');
  }
  return context;
}

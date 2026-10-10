'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  ClientUser, Project, ActionItem, ApprovalItem, MediaAsset, 
  ContentCalendarItem, BrandAsset, Invoice, ContractItem, ChatMessage, 
  ActivityLog, NotificationItem, PerformanceKPI, TimestampComment,
  initialClients, initialProjects, initialActionItems, initialApprovals, 
  initialMediaAssets, initialContentCalendar, initialBrandAssets, 
  initialInvoices, initialContracts, initialChatMessages, initialActivities, 
  initialNotifications, initialPerformanceKPI 
} from '@/data/portal-database';

export type PortalSectionId = 
  | '01 Genel Bakış'
  | '02 Projeler'
  | '03 Onay Merkezi'
  | '04 Medya & Dosyalar'
  | '05 İçerik Takvimi'
  | '06 Marka Merkezi'
  | '07 Performans'
  | '08 Finans & Faturalar'
  | '09 Sözleşmeler & Belgeler'
  | '10 Mesajlar';

export interface ToastMessage {
  id: string;
  message: string;
  type?: 'success' | 'info' | 'warning' | 'error';
}

interface PortalContextType {
  client: ClientUser;
  activeSection: PortalSectionId;
  setActiveSection: (sec: PortalSectionId) => void;
  selectedProjectId: string | null;
  setSelectedProjectId: (id: string | null) => void;
  
  // Data
  projects: Project[];
  actionItems: ActionItem[];
  approvals: ApprovalItem[];
  mediaAssets: MediaAsset[];
  calendarItems: ContentCalendarItem[];
  brandAssets: BrandAsset[];
  invoices: Invoice[];
  contracts: ContractItem[];
  chatMessages: ChatMessage[];
  activities: ActivityLog[];
  notifications: NotificationItem[];
  performanceKPI: PerformanceKPI;

  // Search
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  // Modals & Drawers
  isNewProjectModalOpen: boolean;
  setIsNewProjectModalOpen: (open: boolean) => void;
  isRevisionModalOpen: boolean;
  setIsRevisionModalOpen: (open: boolean) => void;
  activeApprovalTarget: ApprovalItem | null;
  setActiveApprovalTarget: (target: ApprovalItem | null) => void;
  videoPreviewMedia: MediaAsset | ApprovalItem | null;
  setVideoPreviewMedia: (media: MediaAsset | ApprovalItem | null) => void;
  
  // Actions
  addToast: (message: string, type?: 'success' | 'info' | 'warning' | 'error') => void;
  removeToast: (id: string) => void;
  toasts: ToastMessage[];

  approveMediaItem: (approvalId: string) => void;
  requestRevision: (approvalId: string, note: string, comments: TimestampComment[]) => void;
  sendChatMessage: (messageText: string, projectId?: string) => void;
  createNewProjectRequest: (title: string, category: string, description: string, dueDate: string) => void;
  markNotificationAsRead: (id: string) => void;
}

const PortalContext = createContext<PortalContextType | undefined>(undefined);

export const PortalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [client, setClient] = useState<ClientUser>(initialClients[0]);
  const [activeSection, setActiveSection] = useState<PortalSectionId>('01 Genel Bakış');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [actionItems, setActionItems] = useState<ActionItem[]>(initialActionItems);
  const [approvals, setApprovals] = useState<ApprovalItem[]>(initialApprovals);
  const [mediaAssets, setMediaAssets] = useState<MediaAsset[]>(initialMediaAssets);
  const [calendarItems, setCalendarItems] = useState<ContentCalendarItem[]>(initialContentCalendar);
  const [brandAssets, setBrandAssets] = useState<BrandAsset[]>(initialBrandAssets);
  const [invoices, setInvoices] = useState<Invoice[]>(initialInvoices);
  const [contracts, setContracts] = useState<ContractItem[]>(initialContracts);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(initialChatMessages);
  const [activities, setActivities] = useState<ActivityLog[]>(initialActivities);
  const [notifications, setNotifications] = useState<NotificationItem[]>(initialNotifications);
  const [performanceKPI] = useState<PerformanceKPI>(initialPerformanceKPI);

  const [searchQuery, setSearchQuery] = useState('');
  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);
  const [isRevisionModalOpen, setIsRevisionModalOpen] = useState(false);
  const [activeApprovalTarget, setActiveApprovalTarget] = useState<ApprovalItem | null>(null);
  const [videoPreviewMedia, setVideoPreviewMedia] = useState<MediaAsset | ApprovalItem | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    const storedAuth = localStorage.getItem('altun_client_auth');
    if (storedAuth) {
      try {
        const parsed = JSON.parse(storedAuth);
        setClient({
          ...initialClients[0],
          name: parsed.name || initialClients[0].name,
          companyName: parsed.companyName || initialClients[0].companyName,
          email: parsed.email || initialClients[0].email,
        });
      } catch (e) {
        // keep default
      }
    }
  }, []);

  const addToast = (message: string, type: 'success' | 'info' | 'warning' | 'error' = 'success') => {
    const newId = `t-${Date.now()}`;
    setToasts((prev) => [...prev, { id: newId, message, type }]);
    setTimeout(() => {
      removeToast(newId);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const approveMediaItem = (approvalId: string) => {
    setApprovals((prev) =>
      prev.map((item) => (item.id === approvalId ? { ...item, status: 'Onaylandı' } : item))
    );
    // Add activity
    const targetItem = approvals.find((a) => a.id === approvalId);
    const activityText = `"${targetItem?.title || 'Video'}" medyasını onayladı.`;
    setActivities((prev) => [
      {
        id: `act-${Date.now()}`,
        clientId: client.id,
        timestamp: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }),
        date: 'Bugün',
        user: `${client.name} (${client.companyName})`,
        action: activityText,
        iconType: 'approval',
      },
      ...prev,
    ]);

    addToast(`✓ "${targetItem?.title || 'Medya'}" başarıyla onaylandı! Stüdyo ekibine bilgi verildi.`, 'success');
  };

  const requestRevision = (approvalId: string, note: string, comments: TimestampComment[]) => {
    setApprovals((prev) =>
      prev.map((item) => {
        if (item.id === approvalId) {
          const newQuota = item.revisionQuotaUsed + 1;
          const newNotes = item.revisionNotes || [];
          return {
            ...item,
            status: 'Revizyon İstendi',
            revisionQuotaUsed: newQuota,
            comments: [...item.comments, ...comments],
            revisionNotes: [
              {
                revisionNo: `REVİZYON #0${newQuota}`,
                date: new Date().toLocaleDateString('tr-TR'),
                note,
                comments,
              },
              ...newNotes,
            ],
          };
        }
        return item;
      })
    );

    const targetItem = approvals.find((a) => a.id === approvalId);
    setActivities((prev) => [
      {
        id: `act-${Date.now()}`,
        clientId: client.id,
        timestamp: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }),
        date: 'Bugün',
        user: `${client.name}`,
        action: `"${targetItem?.title}" için revizyon talebi gönderdi (${comments.length} timestamp notu dahil).`,
        iconType: 'upload',
      },
      ...prev,
    ]);

    addToast(`↻ Revizyon talebi (Revizyon #${(targetItem?.revisionQuotaUsed || 0) + 1}) Altun Medya ekibine iletildi.`, 'info');
  };

  const sendChatMessage = (messageText: string, projectId?: string) => {
    const newMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      clientId: client.id,
      projectId,
      senderName: client.name,
      senderAvatar: client.avatar,
      isAgency: false,
      message: messageText,
      timestamp: `Bugün, ${new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}`,
    };
    setChatMessages((prev) => [...prev, newMsg]);
    addToast('💬 Mesajınız Altun Medya stüdyo ekibine iletildi.', 'info');
  };

  const createNewProjectRequest = (title: string, category: string, description: string, dueDate: string) => {
    const newProj: Project = {
      id: `proj-${Date.now()}`,
      clientId: client.id,
      title,
      category,
      status: 'Planlama',
      progress: 5,
      dueDate,
      nextStep: 'Strateji & Brief Onayı',
      coverImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop',
      description,
      workflow: [
        { name: 'Talep Alındı', status: 'completed', date: 'Bugün' },
        { name: 'Brief & Konsept', status: 'active', date: 'Bekleniyor' },
        { name: 'Çekim & Prodüksiyon', status: 'upcoming' },
        { name: 'Kurgu', status: 'upcoming' },
        { name: 'Müşteri Onayı', status: 'upcoming' },
      ],
      assignedTeam: [
        { name: 'Hasan Altun', role: 'Kreatif Direktör', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop' },
      ],
    };

    setProjects([newProj, ...projects]);
    addToast(`🚀 "${title}" projesi talebi oluşturuldu! Altun Medya ekibi sizinle iletişime geçecek.`, 'success');
  };

  const markNotificationAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  return (
    <PortalContext.Provider
      value={{
        client,
        activeSection,
        setActiveSection,
        selectedProjectId,
        setSelectedProjectId,
        projects,
        actionItems,
        approvals,
        mediaAssets,
        calendarItems,
        brandAssets,
        invoices,
        contracts,
        chatMessages,
        activities,
        notifications,
        performanceKPI,
        searchQuery,
        setSearchQuery,
        isNewProjectModalOpen,
        setIsNewProjectModalOpen,
        isRevisionModalOpen,
        setIsRevisionModalOpen,
        activeApprovalTarget,
        setActiveApprovalTarget,
        videoPreviewMedia,
        setVideoPreviewMedia,
        addToast,
        removeToast,
        toasts,
        approveMediaItem,
        requestRevision,
        sendChatMessage,
        createNewProjectRequest,
        markNotificationAsRead,
      }}
    >
      {children}
    </PortalContext.Provider>
  );
};

export const usePortal = () => {
  const context = useContext(PortalContext);
  if (!context) {
    throw new Error('usePortal must be used within a PortalProvider');
  }
  return context;
};

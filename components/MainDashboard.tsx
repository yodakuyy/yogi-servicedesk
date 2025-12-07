import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Ticket, 
  BookOpen, 
  Settings, 
  Plus, 
  MoreVertical, 
  Search,
  Star,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  FileText,
  List,
  Coffee,
  User,
  Building,
  LogOut,
  Users,
  Clock,
  Tag,
  FileInput,
  ShieldAlert
} from 'lucide-react';

const MainDashboard: React.FC = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-800 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col flex-shrink-0 z-20">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
             <div className="w-4 h-4 bg-white rounded-full opacity-30" />
          </div>
          <span className="font-bold text-lg text-indigo-900 leading-tight">
            Poppins<br /><span className="text-xs font-normal text-gray-500">service desk</span>
          </span>
        </div>

        <nav className="flex-1 px-4 space-y-1 mt-4 overflow-y-auto custom-scrollbar">
          <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active />
          
          <NavItem icon={<Ticket size={20} />} label="Incident" badge="39" />
          
          <NavItem icon={<FileText size={20} />} label="Service Request" />
          
          <NavItem icon={<List size={20} />} label="My Tickets" />
          
          <NavItem icon={<BookOpen size={20} />} label="Knowledge Base" />
          
          <NavItem icon={<Coffee size={20} />} label="Out Of Office" badge="4" />
          
          {/* Settings with Submenu */}
          <div>
            <button 
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors group text-gray-500 hover:bg-gray-50 hover:text-gray-900`}
            >
              <span className="text-gray-400 group-hover:text-gray-600"><Settings size={20} /></span>
              <span className="font-medium text-sm flex-1 text-left">Settings</span>
              {isSettingsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            
            {isSettingsOpen && (
              <div className="ml-4 pl-4 border-l border-gray-100 space-y-1 mt-1 mb-2">
                <SubNavItem label="User Management" icon={<Users size={14}/>} />
                <SubNavItem label="Group Management" icon={<Users size={14}/>} />
                <SubNavItem label="SLA Management" icon={<ShieldAlert size={14}/>} />
                <SubNavItem label="Business Hours" icon={<Clock size={14}/>} />
                <SubNavItem label="Categories" icon={<Tag size={14}/>} />
                <SubNavItem label="Service Request Fields" icon={<FileInput size={14}/>} />
              </div>
            )}
          </div>
        </nav>

        {/* Removed Create Ticket Button as requested */}
        <div className="p-4" /> 

        {/* User Profile Section */}
        <div className="p-4 border-t border-gray-100 relative">
          
          {/* Profile Menu Popover */}
          {isProfileMenuOpen && (
            <>
              <div 
                className="fixed inset-0 z-10" 
                onClick={() => setIsProfileMenuOpen(false)} 
              />
              <div className="absolute bottom-20 left-4 right-4 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-20 animate-in fade-in slide-in-from-bottom-2">
                <button className="w-full text-left px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors">
                  <User size={16} className="text-gray-400" />
                  Profile
                </button>
                <button className="w-full text-left px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors">
                  <Building size={16} className="text-gray-400" />
                  Change Department
                </button>
                <div className="h-px bg-gray-100 my-1" />
                <button className="w-full text-left px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 flex items-center gap-3 transition-colors">
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            </>
          )}

          <div className="flex items-center gap-3">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100" 
              alt="User" 
              className="w-10 h-10 rounded-full object-cover border border-gray-200"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">Mary Wells.45</p>
            </div>
            <button 
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className={`text-gray-400 hover:text-gray-600 p-1.5 rounded-lg transition-colors ${isProfileMenuOpen ? 'bg-gray-100 text-gray-900' : ''}`}
            >
              <MoreVertical size={18} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 py-3 px-8 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-1.5 shadow-sm border border-gray-100 max-w-xl">
             <span className="font-bold text-indigo-900 text-sm">Kudos</span>
             <Star size={14} className="text-purple-500 fill-purple-500" />
             <div className="h-4 w-px bg-gray-300 mx-2"></div>
             <p className="text-xs text-gray-600 truncate flex items-center gap-2">
               <span>So nice & helpful! Thank you! - Martha Stephens</span>
               <Star size={10} className="text-yellow-400 fill-yellow-400" />
               <span>Thanks for taking care of that so quickly! - Coworker</span>
             </p>
          </div>

          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
            />
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* Top Row: Tickets */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* My Tickets */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col h-[420px]">
                <div className="flex items-center justify-between mb-2">
                   <div className="flex items-baseline gap-4">
                     <h2 className="text-lg font-bold text-gray-900">My Tickets</h2>
                     <div className="flex gap-4 text-xs font-medium">
                       <span className="text-gray-900">8 <span className="text-gray-500 font-normal">Current</span></span>
                       <span className="text-gray-900">5 <span className="text-gray-500 font-normal">Closed</span></span>
                     </div>
                   </div>
                   <button className="text-xs text-gray-500 flex items-center gap-1 border border-gray-200 rounded-lg px-2 py-1 hover:bg-gray-50">
                     View All Tickets <ChevronDown size={14} />
                   </button>
                </div>
                
                <div className="flex-1 overflow-auto -mx-6 px-6">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-indigo-50/50 text-gray-500 text-xs font-medium sticky top-0">
                      <tr>
                        <th className="py-3 font-normal">Number</th>
                        <th className="py-3 font-normal">Date <ChevronDown size={10} className="inline ml-1" /></th>
                        <th className="py-3 font-normal">Subject</th>
                        <th className="py-3 font-normal">User</th>
                        <th className="py-3 font-normal">Status</th>
                        <th className="py-3 font-normal">Last Update</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs">
                      <TicketRow 
                        id="INC4568" 
                        date="04/12/23" time="08:24AM" 
                        subject="Error when starting Microsoft Word" 
                        user="Marso.27" 
                        status="WIP" 
                        updateTime="23min" updateColor="green" 
                      />
                      <TicketRow 
                        id="RITM4321" 
                        date="04/11/23" time="10:07AM" 
                        subject="Assistance moving desktop computer" 
                        user="Deppert.5" 
                        status="Assigned" 
                        updateTime="1hr" updateColor="green" 
                      />
                       <TicketRow 
                        id="RITM4268" 
                        date="04/10/23" time="02:34PM" 
                        subject="I'd like to order a new webcam" 
                        user="Miller.409" 
                        status="Pending" 
                        updateTime="2 days" updateColor="red" 
                      />
                       <TicketRow 
                        id="RITM4599" 
                        date="04/10/23" time="09:15AM" 
                        subject="Need access to shared drive" 
                        user="Smith.839" 
                        status="WIP" 
                        updateTime="4min" updateColor="green" 
                      />
                      <TicketRow 
                        id="INC4567" 
                        date="04/08/23" time="-" 
                        subject="Can't sign into app" 
                        user="Shulz.45" 
                        status="Pending" 
                        updateTime="1 day" updateColor="yellow" 
                      />
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Unassigned Tickets */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col h-[420px]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-bold text-gray-900">Unassigned Tickets</h2>
                    <span className="bg-indigo-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md">4</span>
                  </div>
                  <button className="text-xs text-gray-500 flex items-center gap-1 border border-gray-200 rounded-lg px-2 py-1 hover:bg-gray-50">
                     View Team Workload <ChevronDown size={14} />
                  </button>
                </div>

                <div className="flex-1 overflow-auto">
                   <table className="w-full text-left">
                    <thead className="text-gray-500 text-xs font-medium border-b border-gray-100">
                      <tr>
                        <th className="pb-3 font-normal">Number</th>
                        <th className="pb-3 font-normal">Date <ChevronDown size={10} className="inline ml-1" /></th>
                        <th className="pb-3 font-normal">Subject</th>
                        <th className="pb-3 font-normal">User</th>
                        <th className="pb-3 font-normal pl-2">Quick Assign</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs">
                      <UnassignedRow 
                        id="RITM4579" 
                        date="04/12/23" time="10:40PM" 
                        subject="Need assistance with powerpoint" 
                        user="Lynn.2" 
                      />
                      <UnassignedRow 
                        id="RITM4344" 
                        date="04/12/23" time="10:17AM" 
                        subject="Requesting info about new app" 
                        user="Mackay.43" 
                      />
                      <tr className="border-b border-gray-50 last:border-0 group hover:bg-gray-50/50">
                        <td className="py-3 text-gray-500">INC4298</td>
                        <td className="py-3">
                          <div className="text-gray-900 font-medium">04/12/23</div>
                          <div className="text-gray-400 text-[10px]">08:34PM</div>
                        </td>
                        <td className="py-3 text-gray-900 font-medium pr-2">Keyboard not responding</td>
                        <td className="py-3 text-gray-500">Wilson.25</td>
                        <td className="py-3 pl-2">
                          <button className="w-full bg-indigo-600 text-white text-xs py-1.5 px-3 rounded-lg flex items-center justify-between">
                            <div className="flex items-center gap-2">
                               <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=50&h=50" className="w-4 h-4 rounded-full" alt="L" />
                               <span>Levinson.2</span>
                            </div>
                            <ChevronRight size={12} />
                          </button>
                        </td>
                      </tr>
                      <UnassignedRow 
                        id="RITM4601" 
                        date="04/11/23" time="07:37AM" 
                        subject="Financial app access needed" 
                        user="Fry.36" 
                      />
                    </tbody>
                   </table>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* My Tasks */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-80 flex flex-col">
                <h2 className="text-lg font-bold text-gray-900 mb-4">My Tasks</h2>
                <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-2 flex justify-between px-2">
                   <span>Number <ChevronDown size={8} className="inline"/> Date</span>
                   <span className="mr-8">Subject</span>
                   <span>Status</span>
                </div>
                <div className="flex-1 overflow-auto space-y-3">
                   <TaskItem id="TASK3596" date="04/12/23" time="08:24AM" subject="Install software in Computer Lab 23" status="In Progress" />
                   <TaskItem id="TASK3575" date="04/11/23" time="10:07AM" subject="Image recent computer order" status="Assigned" />
                   <TaskItem id="TASK3571" date="04/10/23" time="02:34PM" subject="Order more webcams" status="In Progress" />
                   <TaskItem id="TASK3436" date="04/10/23" time="01:02PM" subject="Perform a stock audit" status="Assigned" />
                </div>
              </div>

              {/* Today's Appointments */}
              <div className="bg-indigo-50/50 rounded-2xl p-6 shadow-sm border border-gray-100 h-80 flex flex-col relative overflow-hidden">
                <div className="flex items-center justify-between mb-4 z-10">
                   <h2 className="text-lg font-bold text-gray-900">Today's Appointments</h2>
                   <button className="w-8 h-8 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg flex items-center justify-center transition-colors">
                     <Plus size={18} />
                   </button>
                </div>
                
                <div className="flex-1 relative z-10 flex flex-col gap-3">
                   {/* Timeline line */}
                   <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gray-300 -z-10 border-l border-dashed border-gray-300"></div>

                   <div className="flex gap-4 items-center">
                     <div className="w-9 text-xs font-medium text-gray-500 text-right">8</div>
                     <div className="flex-1 bg-white p-3 rounded-lg border border-gray-200 text-xs shadow-sm">
                        <span className="font-bold text-gray-800">8:30-9:30 AM</span> - Team Meeting
                     </div>
                   </div>
                   <div className="flex gap-4 items-center">
                     <div className="w-9 text-xs font-medium text-gray-500 text-right">9</div>
                   </div>
                   <div className="flex gap-4 items-center">
                     <div className="w-9 text-xs font-medium text-gray-500 text-right">10</div>
                     <div className="flex-1 bg-white p-3 rounded-lg border border-gray-200 text-xs shadow-sm">
                        <span className="font-bold text-gray-800">10-10:30 AM</span> - INC4567 Call
                     </div>
                   </div>
                   <div className="flex gap-4 items-center">
                     <div className="w-9 text-xs font-medium text-gray-500 text-right">11</div>
                   </div>
                   <div className="flex gap-4 items-center">
                     <div className="w-9 text-xs font-medium text-gray-500 text-right">12</div>
                     <div className="flex-1 bg-white p-3 rounded-lg border border-gray-200 text-xs shadow-sm">
                        <span className="font-bold text-gray-800">12-1PM</span> - Lunch Break
                     </div>
                   </div>
                </div>
              </div>

              {/* Inventory Management -> Renamed to match prompt context if needed, but visually keeping chart as per image but label could change if requested. Prompt said "Inventory diganti menjadi My Tickets" but "My Tickets" is already the top left widget. The prompt instructions are a bit conflicting: "Tickets di ganti dengan Incident", "inventory diganti menjadi My Tickets". 
              
              However, the top left widget was "My Tickets" in the design. If Inventory becomes "My Tickets", we have duplicate names. 
              Let's interpret: 
              1. Sidebar: Inventory -> My Tickets.
              2. Widget Title: The widget labeled "Inventory Management" in the original image should strictly speaking be the one referred to, but usually prompts refer to the Sidebar. 
              
              Let's look at Sidebar changes again:
              - Tickets -> Incident
              - (new) Service Request
              - Inventory -> My Tickets
              - Projects -> Out Of Office
              
              This affects the SIDEBAR items. The Widgets themselves:
              - The top left widget is ALREADY named "My Tickets". 
              - The bottom right widget is "Inventory Management".
              
              If I change Sidebar Inventory to "My Tickets", it links to the page. 
              The widgets usually reflect the dashboard view. I will keep the widget layouts as they are (Top Left: My Tickets, Top Right: Unassigned, Bottom Right: Inventory Management Chart) unless explicitly told to change the WIDGET content. The prompt seems to focus on the Sidebar menu structure primarily.
              */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-80 flex flex-col">
                <h2 className="text-lg font-bold text-gray-900 mb-1">Inventory Management</h2>
                <p className="text-xs text-gray-500 mb-4">Current Stock:</p>
                
                <div className="flex-1 flex items-end justify-between px-2 pb-2 gap-4 border-b border-gray-200 relative">
                   {/* Y Axis Grid lines */}
                   <div className="absolute inset-0 flex flex-col justify-between pointer-events-none text-[10px] text-gray-400">
                      <div className="w-full border-t border-gray-100 border-dashed h-0"></div>
                      <div className="w-full border-t border-gray-100 border-dashed h-0"></div>
                      <div className="w-full border-t border-gray-100 border-dashed h-0"></div>
                      <div className="w-full border-t border-gray-100 border-dashed h-0"></div>
                   </div>
                   <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px] text-gray-400 -ml-6">
                      <span>60</span>
                      <span>40</span>
                      <span>20</span>
                      <span>0</span>
                   </div>

                   <div className="w-1/3 bg-indigo-600 rounded-t-sm h-[80%] relative group">
                      <div className="opacity-0 group-hover:opacity-100 absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] py-1 px-2 rounded">58</div>
                   </div>
                   <div className="w-1/3 bg-lime-400 rounded-t-sm h-[30%] relative group">
                      <div className="opacity-0 group-hover:opacity-100 absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] py-1 px-2 rounded">15</div>
                   </div>
                   <div className="w-1/3 bg-indigo-500 rounded-t-sm h-[45%] relative group">
                      <div className="opacity-0 group-hover:opacity-100 absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] py-1 px-2 rounded">32</div>
                   </div>
                </div>
                <div className="flex justify-between text-[10px] text-gray-500 mt-2 px-2 text-center">
                   <span className="w-1/3">Desktops</span>
                   <span className="w-1/3">Laptops</span>
                   <span className="w-1/3">Tablets</span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                   <span className="text-[10px] text-gray-500 font-medium">Last Stock Audit: <span className="text-gray-900">03/17/23</span></span>
                   <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium py-2 px-4 rounded-lg transition-colors">
                     Perform Audit
                   </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Helper Components

const NavItem: React.FC<{ icon: React.ReactNode; label: string; active?: boolean; badge?: string }> = ({ icon, label, active, badge }) => (
  <a href="#" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors group ${active ? 'bg-indigo-50 text-indigo-700' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}>
    <span className={`${active ? 'text-indigo-600' : 'text-gray-400 group-hover:text-gray-600'}`}>{icon}</span>
    <span className="font-medium text-sm flex-1">{label}</span>
    {badge && (
      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${active ? 'bg-indigo-200 text-indigo-700' : 'bg-indigo-600 text-white'}`}>
        {badge}
      </span>
    )}
  </a>
);

const SubNavItem: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-indigo-600 transition-colors group">
    <span className="text-gray-400 group-hover:text-indigo-500 transition-colors">{icon}</span>
    <span className="text-xs font-medium">{label}</span>
  </a>
);

const TicketRow: React.FC<{ id: string, date: string, time: string, subject: string, user: string, status: string, updateTime: string, updateColor: 'green' | 'red' | 'yellow' }> = ({ id, date, time, subject, user, status, updateTime, updateColor }) => {
  const badgeColors = {
    green: 'bg-green-100 text-green-700',
    red: 'bg-red-100 text-red-700',
    yellow: 'bg-amber-100 text-amber-700',
  };

  return (
    <tr className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
      <td className="py-3 text-gray-500 font-medium">{id}</td>
      <td className="py-3">
        <div className="text-gray-900 font-medium">{date}</div>
        <div className="text-gray-400 text-[10px]">{time}</div>
      </td>
      <td className="py-3 text-gray-900 font-medium pr-4">{subject}</td>
      <td className="py-3 text-gray-500">{user}</td>
      <td className="py-3 text-gray-900">{status}</td>
      <td className="py-3">
        <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${badgeColors[updateColor]}`}>
          {updateTime}
        </span>
      </td>
    </tr>
  );
};

const UnassignedRow: React.FC<{ id: string, date: string, time: string, subject: string, user: string }> = ({ id, date, time, subject, user }) => (
  <tr className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
    <td className="py-3 text-gray-500">{id}</td>
    <td className="py-3">
      <div className="text-gray-900 font-medium">{date}</div>
      <div className="text-gray-400 text-[10px]">{time}</div>
    </td>
    <td className="py-3 text-gray-900 font-medium pr-2 max-w-[150px] truncate">{subject}</td>
    <td className="py-3 text-gray-500">{user}</td>
    <td className="py-3 pl-2">
      <button className="w-full bg-white border border-gray-200 text-gray-400 text-xs py-1.5 px-3 rounded-lg flex items-center justify-between hover:border-gray-300">
         <span>Select Technician</span>
         <ChevronDown size={12} />
      </button>
    </td>
  </tr>
);

const TaskItem: React.FC<{ id: string, date: string, time: string, subject: string, status: string }> = ({ id, date, time, subject, status }) => (
  <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer group">
    <div className="w-5 h-5 rounded-full border-2 border-indigo-200 group-hover:border-indigo-500 transition-colors flex-shrink-0"></div>
    <div className="flex-1 min-w-0">
       <div className="flex items-center gap-2 mb-0.5">
          <span className="text-[10px] font-bold text-gray-400">{id}</span>
          <span className="text-[10px] text-gray-400">{date}</span>
       </div>
       <p className="text-xs font-bold text-gray-800 truncate">{subject}</p>
       <div className="text-[10px] text-gray-400 mt-0.5">{time}</div>
    </div>
    <div className="text-[10px] text-gray-500 font-medium">{status}</div>
  </div>
);

export default MainDashboard;
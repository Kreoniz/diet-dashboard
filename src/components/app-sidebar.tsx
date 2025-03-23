import * as React from "react";
import {
  IconDashboard,
  IconWriting,
  IconHelp,
  IconCarrot,
  IconSettings,
} from "@tabler/icons-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "Здоровый Чел",
    email: "diet-monster@mail.ru",
    avatar: "/avatars/McQueen.jpg",
  },
  navMain: [
    {
      title: "Панель",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Отчеты",
      url: "#",
      icon: IconWriting,
    },
  ],
  navSecondary: [
    {
      title: "Настройки",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Задать вопрос",
      url: "#",
      icon: IconHelp,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconCarrot className="!size-5" />
                <span className="text-base font-semibold">Панель здоровья</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}

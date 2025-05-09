import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AccountPage() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
              <div className="flex items-center justify-between">
                <h1 className="text-xl sm:text-2xl font-bold">Аккаунт</h1>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Профиль</CardTitle>
                    <CardDescription>
                      Управление информацией вашего профиля
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <Avatar className="h-20 w-20 rounded-lg">
                        <AvatarImage
                          src="/avatars/McQueen.jpg"
                          alt="Здоровый Чел"
                        />
                        <AvatarFallback className="rounded-lg">
                          ЗЧ
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-2">
                        <Button size="sm" variant="outline">
                          Изменить фото
                        </Button>
                        <p className="text-xs text-muted-foreground">
                          JPG, PNG или GIF. Максимальный размер 2MB.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">Имя</Label>
                          <Input id="first-name" defaultValue="Здоровый" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Фамилия</Label>
                          <Input id="last-name" defaultValue="Чел" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          defaultValue="diet-monster@mail.ru"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="username">Имя пользователя</Label>
                        <Input id="username" defaultValue="diet-monster" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                    <Button className="w-full sm:w-auto">
                      Сохранить изменения
                    </Button>
                  </CardFooter>
                </Card>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Пароль</CardTitle>
                      <CardDescription>
                        Изменение пароля вашего аккаунта
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Текущий пароль</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">Новый пароль</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">
                          Подтвердите пароль
                        </Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                      <Button className="w-full sm:w-auto">
                        Обновить пароль
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Удаление аккаунта</CardTitle>
                      <CardDescription>
                        Удаление вашего аккаунта и всех связанных с ним данных
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        После удаления вашего аккаунта, все ваши данные будут
                        безвозвратно удалены. Пожалуйста, убедитесь, что вы
                        сохранили все необходимые данные перед удалением.
                      </p>
                    </CardContent>
                    <CardFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                      <Button
                        variant="destructive"
                        className="w-full sm:w-auto"
                      >
                        Удалить аккаунт
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

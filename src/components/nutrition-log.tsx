"use client";

import * as React from "react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { IconPlus, IconFilter, IconCalendar, IconX } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { useIsMobile } from "@/hooks/use-mobile";

// Sample nutrition log data
const nutritionLogs = [
  {
    id: 1,
    date: "2025-05-09",
    meal: "Завтрак",
    food: "Овсянка с фруктами",
    calories: 320,
    protein: 12,
    carbs: 45,
    fat: 8,
  },
  {
    id: 2,
    date: "2025-05-09",
    meal: "Обед",
    food: "Куриная грудка с овощами",
    calories: 450,
    protein: 35,
    carbs: 25,
    fat: 15,
  },
  {
    id: 3,
    date: "2025-05-09",
    meal: "Ужин",
    food: "Рыба с салатом",
    calories: 380,
    protein: 30,
    carbs: 15,
    fat: 20,
  },
  {
    id: 4,
    date: "2025-05-08",
    meal: "Завтрак",
    food: "Творог с ягодами",
    calories: 280,
    protein: 18,
    carbs: 30,
    fat: 5,
  },
  {
    id: 5,
    date: "2025-05-08",
    meal: "Обед",
    food: "Суп с фрикадельками",
    calories: 420,
    protein: 25,
    carbs: 35,
    fat: 18,
  },
];

// Meal types for selection
const mealTypes = [
  { value: "breakfast", label: "Завтрак" },
  { value: "lunch", label: "Обед" },
  { value: "dinner", label: "Ужин" },
  { value: "snack", label: "Перекус" },
];

export function NutritionLog() {
  const isMobile = useIsMobile();
  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date());
  const [logs, setLogs] = React.useState(nutritionLogs);
  const [newEntry, setNewEntry] = React.useState({
    food: "",
    meal: "Завтрак",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
  });
  const [filterMeals, setFilterMeals] = React.useState<string[]>([]);
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);

  // Format date for filtering
  const formattedDate = format(selectedDate, "yyyy-MM-dd");

  // Filter logs by selected date and meal types
  const filteredLogs = logs.filter((log) => {
    const dateMatches = log.date === formattedDate;
    const mealMatches =
      filterMeals.length === 0 || filterMeals.includes(log.meal);
    return dateMatches && mealMatches;
  });

  // Calculate daily totals
  const dailyTotals = filteredLogs.reduce(
    (acc, log) => {
      acc.calories += log.calories;
      acc.protein += log.protein;
      acc.carbs += log.carbs;
      acc.fat += log.fat;
      return acc;
    },
    { calories: 0, protein: 0, carbs: 0, fat: 0 },
  );

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEntry((prev) => ({ ...prev, [name]: value }));
  };

  // Handle meal type selection
  const handleMealChange = (value: string) => {
    setNewEntry((prev) => ({ ...prev, meal: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create new log entry
    const newLog = {
      id: logs.length + 1,
      date: formattedDate,
      meal: newEntry.meal,
      food: newEntry.food,
      calories: Number.parseInt(newEntry.calories) || 0,
      protein: Number.parseInt(newEntry.protein) || 0,
      carbs: Number.parseInt(newEntry.carbs) || 0,
      fat: Number.parseInt(newEntry.fat) || 0,
    };

    // Add to logs
    setLogs((prev) => [...prev, newLog]);

    // Reset form
    setNewEntry({
      food: "",
      meal: "Завтрак",
      calories: "",
      protein: "",
      carbs: "",
      fat: "",
    });
  };

  // Toggle meal filter
  const toggleMealFilter = (meal: string) => {
    setFilterMeals((prev) =>
      prev.includes(meal) ? prev.filter((m) => m !== meal) : [...prev, meal],
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
        <h1 className="text-xl sm:text-2xl font-bold">Журнал питания</h1>
        <div className="flex flex-wrap items-center gap-2">
          <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="w-full sm:w-auto justify-start sm:justify-center"
              >
                <IconCalendar className="mr-2 h-4 w-4" />
                <span className="truncate">
                  {format(selectedDate, "d MMMM yyyy", { locale: ru })}
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto p-0"
              align={isMobile ? "center" : "end"}
            >
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => {
                  if (date) {
                    setSelectedDate(date);
                    setIsCalendarOpen(false);
                  }
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="w-full sm:w-auto justify-start sm:justify-center"
              >
                <IconFilter className="mr-2 h-4 w-4" />
                Фильтр
                {filterMeals.length > 0 && (
                  <span className="ml-1 rounded-full bg-primary w-5 h-5 text-xs flex items-center justify-center text-primary-foreground">
                    {filterMeals.length}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side={isMobile ? "bottom" : "right"}>
              <SheetHeader>
                <SheetTitle>Фильтры</SheetTitle>
                <SheetDescription>
                  Выберите типы приемов пищи для отображения
                </SheetDescription>
              </SheetHeader>
              <div className="py-4 space-y-4">
                <div className="space-y-4 px-4">
                  <h3 className="text-sm font-medium">Приемы пищи</h3>
                  {mealTypes.map((type) => (
                    <div
                      key={type.value}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={`filter-${type.value}`}
                        checked={filterMeals.includes(type.label)}
                        onCheckedChange={() => toggleMealFilter(type.label)}
                      />
                      <label
                        htmlFor={`filter-${type.value}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {type.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <SheetFooter className={isMobile ? "flex-row gap-2" : ""}>
                <Button
                  variant="outline"
                  onClick={() => setFilterMeals([])}
                  className={isMobile ? "flex-1" : ""}
                >
                  Сбросить
                </Button>
                <SheetClose asChild>
                  <Button className={isMobile ? "flex-1" : ""}>
                    Применить
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="sm"
                className="w-full sm:w-auto justify-start sm:justify-center"
              >
                <IconPlus className="mr-2 h-4 w-4" />
                Добавить запись
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Добавить запись о питании</DialogTitle>
                <DialogDescription>
                  Заполните информацию о приеме пищи
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                    <Label htmlFor="meal" className="sm:text-right">
                      Прием пищи
                    </Label>
                    <Select
                      value={newEntry.meal}
                      onValueChange={handleMealChange}
                    >
                      <SelectTrigger className="col-span-1 sm:col-span-3">
                        <SelectValue placeholder="Выберите прием пищи" />
                      </SelectTrigger>
                      <SelectContent>
                        {mealTypes.map((type) => (
                          <SelectItem key={type.value} value={type.label}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                    <Label htmlFor="food" className="sm:text-right">
                      Блюдо
                    </Label>
                    <Input
                      id="food"
                      name="food"
                      value={newEntry.food}
                      onChange={handleInputChange}
                      className="col-span-1 sm:col-span-3"
                      placeholder="Название блюда"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                    <Label htmlFor="calories" className="sm:text-right">
                      Калории
                    </Label>
                    <Input
                      id="calories"
                      name="calories"
                      type="number"
                      value={newEntry.calories}
                      onChange={handleInputChange}
                      className="col-span-1 sm:col-span-3"
                      placeholder="ккал"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="protein" className="text-sm">
                        Белки (г)
                      </Label>
                      <Input
                        id="protein"
                        name="protein"
                        type="number"
                        value={newEntry.protein}
                        onChange={handleInputChange}
                        placeholder="г"
                      />
                    </div>
                    <div>
                      <Label htmlFor="carbs" className="text-sm">
                        Углеводы (г)
                      </Label>
                      <Input
                        id="carbs"
                        name="carbs"
                        type="number"
                        value={newEntry.carbs}
                        onChange={handleInputChange}
                        placeholder="г"
                      />
                    </div>
                    <div>
                      <Label htmlFor="fat" className="text-sm">
                        Жиры (г)
                      </Label>
                      <Input
                        id="fat"
                        name="fat"
                        type="number"
                        value={newEntry.fat}
                        onChange={handleInputChange}
                        placeholder="г"
                      />
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="submit">Добавить</Button>
                  </DialogClose>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Калории</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {dailyTotals.calories} ккал
            </div>
            <p className="text-xs text-muted-foreground">
              Дневная цель: 2000 ккал
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Белки</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dailyTotals.protein} г</div>
            <p className="text-xs text-muted-foreground">Дневная цель: 100 г</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Углеводы</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dailyTotals.carbs} г</div>
            <p className="text-xs text-muted-foreground">Дневная цель: 250 г</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Жиры</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dailyTotals.fat} г</div>
            <p className="text-xs text-muted-foreground">Дневная цель: 65 г</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
            <CardTitle>Записи питания</CardTitle>
            <div className="flex items-center gap-2">
              {filterMeals.length > 0 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setFilterMeals([])}
                  className="h-8 gap-1"
                >
                  <span>Фильтры: {filterMeals.length}</span>
                  <IconX className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="breakfast">Завтрак</TabsTrigger>
              <TabsTrigger value="lunch">Обед</TabsTrigger>
              <TabsTrigger value="dinner">Ужин</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="mt-4 space-y-4">
                {filteredLogs.length > 0 ? (
                  filteredLogs.map((log) => (
                    <div
                      key={log.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between rounded-lg border p-4 gap-2 sm:gap-0"
                    >
                      <div>
                        <h3 className="font-medium">{log.food}</h3>
                        <p className="text-sm text-muted-foreground">
                          {log.meal}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-left sm:text-right">
                          <p className="font-medium">{log.calories} ккал</p>
                          <p className="text-xs text-muted-foreground">
                            Б: {log.protein}г • У: {log.carbs}г • Ж: {log.fat}г
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <p className="text-muted-foreground mb-4">
                      Нет записей для выбранных фильтров
                    </p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <IconPlus className="mr-2 h-4 w-4" />
                          Добавить запись
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        {/* Same dialog content as above */}
                      </DialogContent>
                    </Dialog>
                  </div>
                )}
              </div>
            </TabsContent>
            <TabsContent value="breakfast">
              <div className="mt-4 space-y-4">
                {filteredLogs
                  .filter((log) => log.meal === "Завтрак")
                  .map((log) => (
                    <div
                      key={log.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between rounded-lg border p-4 gap-2 sm:gap-0"
                    >
                      <div>
                        <h3 className="font-medium">{log.food}</h3>
                        <p className="text-sm text-muted-foreground">
                          {log.meal}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-left sm:text-right">
                          <p className="font-medium">{log.calories} ккал</p>
                          <p className="text-xs text-muted-foreground">
                            Б: {log.protein}г • У: {log.carbs}г • Ж: {log.fat}г
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="lunch">
              <div className="mt-4 space-y-4">
                {filteredLogs
                  .filter((log) => log.meal === "Обед")
                  .map((log) => (
                    <div
                      key={log.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between rounded-lg border p-4 gap-2 sm:gap-0"
                    >
                      <div>
                        <h3 className="font-medium">{log.food}</h3>
                        <p className="text-sm text-muted-foreground">
                          {log.meal}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-left sm:text-right">
                          <p className="font-medium">{log.calories} ккал</p>
                          <p className="text-xs text-muted-foreground">
                            Б: {log.protein}г • У: {log.carbs}г • Ж: {log.fat}г
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="dinner">
              <div className="mt-4 space-y-4">
                {filteredLogs
                  .filter((log) => log.meal === "Ужин")
                  .map((log) => (
                    <div
                      key={log.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between rounded-lg border p-4 gap-2 sm:gap-0"
                    >
                      <div>
                        <h3 className="font-medium">{log.food}</h3>
                        <p className="text-sm text-muted-foreground">
                          {log.meal}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-left sm:text-right">
                          <p className="font-medium">{log.calories} ккал</p>
                          <p className="text-xs text-muted-foreground">
                            Б: {log.protein}г • У: {log.carbs}г • Ж: {log.fat}г
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

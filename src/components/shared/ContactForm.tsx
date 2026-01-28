import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Ім'я повинно містити мінімум 2 символи"),
  email: z.string().email("Введіть коректний email"),
  phone: z.string().optional(),
  interest: z.enum(["general", "migration", "student", "support", "business"]).default("general"),
  message: z.string().min(10, "Повідомлення повинно містити мінімум 10 символів"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interest: "general",
      message: "",
    },
  });

  function onSubmit(data: ContactFormData) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      form.reset();
      toast({
        title: "Заявку відправлено!",
        description: "Ми зв'яжемося з вами найближчим часом.",
      });
    }, 1000);
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      <h3 className="text-2xl font-bold font-display mb-2">Напишіть нам</h3>
      <p className="text-muted-foreground mb-6">
        Заповніть форму, і наш спеціаліст зв'яжеться з вами для безкоштовної консультації.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ваше ім'я</FormLabel>
                <FormControl>
                  <Input placeholder="Іван Іванов" {...field} className="h-11 bg-gray-50 border-gray-200 focus:bg-white transition-colors" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="ivan@example.com" {...field} className="h-11 bg-gray-50 border-gray-200 focus:bg-white transition-colors" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Телефон</FormLabel>
                  <FormControl>
                    <Input placeholder="+380 (99) 000-00-00" {...field} value={field.value || ""} className="h-11 bg-gray-50 border-gray-200 focus:bg-white transition-colors" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="interest"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Цікава послуга</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value || "general"}>
                  <FormControl>
                    <SelectTrigger className="h-11 bg-gray-50 border-gray-200 focus:bg-white transition-colors">
                      <SelectValue placeholder="Виберіть тему" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="general">Загальні питання</SelectItem>
                    <SelectItem value="migration">Імміграція (ПМП/ПМЖ)</SelectItem>
                    <SelectItem value="student">Навчання в Австрії</SelectItem>
                    <SelectItem value="support">Супровід та адаптація</SelectItem>
                    <SelectItem value="business">Бізнес-імміграція</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Повідомлення</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Розкажіть трохи про вашу ситуацію..." 
                    className="min-h-[120px] bg-gray-50 border-gray-200 focus:bg-white transition-colors resize-none" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full h-12 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 mt-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Відправка..." : "Відправити заявку"}
          </Button>
        </form>
      </Form>
    </div>
  );
}

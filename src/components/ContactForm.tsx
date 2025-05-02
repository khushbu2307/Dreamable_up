import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email format")
    .refine(
      (email) => {
        const allowedDomains = ['gmail.com', 'yahoo.com', 'rediffmail.com'];
        const domain = email.split('@')[1];
        return allowedDomains.includes(domain);
      },
      {
        message: "Email must be from gmail.com, yahoo.com, or rediffmail.com",
      }
    ),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  service: z.string(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      service: 'Web Development'
    },
  });

  const handleSubmit = async (values: ContactFormValues) => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', values);
      toast.success('Thank you for reaching out! We will be in touch soon.');
      
      // Reset form
      form.reset({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: 'Web Development'
      });
      
      setLoading(false);
    }, 1500);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium mb-1">Name</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    className="w-full px-4 py-2 rounded-md bg-dreamable-gray/20 border border-dreamable-gray/30 focus:border-dreamable-green/70 focus:outline-none focus:ring-1 focus:ring-dreamable-green/50 text-white transition-all duration-200"
                    placeholder="Your Name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium mb-1">Email</FormLabel>
                <FormControl>
                  <input
                    type="email"
                    {...field}
                    className="w-full px-4 py-2 rounded-md bg-dreamable-gray/20 border border-dreamable-gray/30 focus:border-dreamable-green/70 focus:outline-none focus:ring-1 focus:ring-dreamable-green/50 text-white transition-all duration-200"
                    placeholder="email@gmail.com"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium mb-1">Phone Number</FormLabel>
                <FormControl>
                  <input
                    type="tel"
                    {...field}
                    className="w-full px-4 py-2 rounded-md bg-dreamable-gray/20 border border-dreamable-gray/30 focus:border-dreamable-green/70 focus:outline-none focus:ring-1 focus:ring-dreamable-green/50 text-white transition-all duration-200"
                    placeholder="Your Phone Number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium mb-1">Company</FormLabel>
                <FormControl>
                  <input
                    type="text"
                    {...field}
                    className="w-full px-4 py-2 rounded-md bg-dreamable-gray/20 border border-dreamable-gray/30 focus:border-dreamable-green/70 focus:outline-none focus:ring-1 focus:ring-dreamable-green/50 text-white transition-all duration-200"
                    placeholder="Your Company"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium mb-1">Service Needed</FormLabel>
              <FormControl>
                <select
                  {...field}    
                  className="w-full px-4 py-2 rounded-md bg-black border border-dreamable-gray/30 focus:border-dreamable-green/70 focus:outline-none focus:ring-1 focus:ring-dreamable-green/50 text-white transition-all duration-200 appearance-none"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20' stroke='%23C7ff00'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5em 1.5em' }}
                >
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="Custom Web Apps">Custom Web Apps</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Graphics Design">Graphics Design</option>
                  <option value="Other">Other</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium mb-1">Message</FormLabel>
              <FormControl>
                <textarea
                  {...field}
                  rows={4}
                  className="w-full px-4 py-2 rounded-md bg-dreamable-gray/20 border border-dreamable-gray/30 focus:border-dreamable-green/70 focus:outline-none focus:ring-1 focus:ring-dreamable-green/50 text-white transition-all duration-200"
                  placeholder="Tell us about your project"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div>
          <Button
            type="submit"
            className="w-full bg-dreamable-green hover:bg-dreamable-darkgreen text-black font-medium py-3 transition-all duration-300"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </div>
            ) : (
              'Send Message'
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;

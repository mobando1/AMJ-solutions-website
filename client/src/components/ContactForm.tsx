import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || '';

export default function ContactForm() {
  const [serviceInterest, setServiceInterest] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const role = formData.get('role') as string;
    const message = formData.get('message') as string;

    if (WEB3FORMS_KEY) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            name,
            email,
            company: company || 'Not provided',
            role: role || 'Not provided',
            service_interest: serviceInterest || 'Not specified',
            message,
            subject: `New Inquiry from ${name} — AMJ Solutions Group`,
            from_name: 'AMJ Solutions Group Website',
          }),
        });

        const data = await response.json();
        if (data.success) {
          setIsSuccess(true);
          form.reset();
          setServiceInterest('');
        } else {
          setError('There was an error sending your message. Please try again.');
        }
      } catch {
        setError('There was an error sending your message. Please try again.');
      }
    } else {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            company: company || undefined,
            role: role || undefined,
            serviceInterest: serviceInterest || undefined,
            message,
          }),
        });

        const data = await response.json();
        if (response.ok && data.success) {
          setIsSuccess(true);
          form.reset();
          setServiceInterest('');
        } else {
          const subject = encodeURIComponent(`Inquiry from ${name} — AMJ Solutions Group`);
          const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\nRole: ${role || 'N/A'}\nService Interest: ${serviceInterest || 'N/A'}\n\nMessage:\n${message}`
          );
          window.location.href = `mailto:ana@amjsolutionsgroup.com?subject=${subject}&body=${body}`;
          setIsSuccess(true);
          form.reset();
          setServiceInterest('');
        }
      } catch {
        const subject = encodeURIComponent(`Inquiry from ${name} — AMJ Solutions Group`);
        const body = encodeURIComponent(
          `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\nRole: ${role || 'N/A'}\nService Interest: ${serviceInterest || 'N/A'}\n\nMessage:\n${message}`
        );
        window.location.href = `mailto:ana@amjsolutionsgroup.com?subject=${subject}&body=${body}`;
        setIsSuccess(true);
        form.reset();
        setServiceInterest('');
      }
    }

    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12 space-y-4">
        <div className="flex justify-center">
          <CheckCircle2 className="h-16 w-16 text-primary" />
        </div>
        <h3 className="text-2xl font-semibold text-foreground">
          Message Sent Successfully!
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Thank you for reaching out. We've received your message and will get back to you within 24 hours.
        </p>
        <Button 
          onClick={() => setIsSuccess(false)}
          variant="outline"
          className="mt-4"
          data-testid="button-send-another"
        >
          Send Another Message
        </Button>
      </div>
    );
  }
  
  return (
    <form 
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Full Name <span className="text-destructive">*</span>
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            required
            disabled={isSubmitting}
            data-testid="input-name"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email Address <span className="text-destructive">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john.doe@company.com"
            required
            disabled={isSubmitting}
            data-testid="input-email"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-foreground">
            Company
          </label>
          <Input
            id="company"
            name="company"
            type="text"
            placeholder="Company Name"
            disabled={isSubmitting}
            data-testid="input-company"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="role" className="text-sm font-medium text-foreground">
            Role
          </label>
          <Input
            id="role"
            name="role"
            type="text"
            placeholder="Chief Communications Officer"
            disabled={isSubmitting}
            data-testid="input-role"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="serviceInterest" className="text-sm font-medium text-foreground">
          Service of Interest
        </label>
        <Select 
          value={serviceInterest} 
          onValueChange={setServiceInterest}
          disabled={isSubmitting}
        >
          <SelectTrigger data-testid="select-service">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Executive Crisis & Risk Advisory">Executive Crisis & Risk Advisory</SelectItem>
            <SelectItem value="Strategic Communications & Leadership Alignment">Strategic Communications & Leadership Alignment</SelectItem>
            <SelectItem value="Change Leadership & Organizational Stability">Change Leadership & Organizational Stability</SelectItem>
            <SelectItem value="Program & Execution Stabilization">Program & Execution Stabilization</SelectItem>
            <SelectItem value="General Inquiry">General Inquiry</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message <span className="text-destructive">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your communications needs and challenges..."
          className="min-h-[120px] resize-none"
          required
          disabled={isSubmitting}
          data-testid="input-message"
        />
      </div>

      {error && (
        <div className="text-destructive text-sm bg-destructive/10 p-3 rounded-md" data-testid="error-message">
          {error}
        </div>
      )}

      <Button
        type="submit"
        className="w-full md:w-auto"
        disabled={isSubmitting}
        data-testid="button-submit"
      >
        <Send className="h-4 w-4 mr-2" />
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}

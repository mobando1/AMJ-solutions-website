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
import { Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactForm() {
  const [serviceInterest, setServiceInterest] = useState('');
  const thankYouUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/thank-you` 
    : 'https://amjsolutionsgroup.com/thank-you';
  
  return (
    <form 
      action="https://formsubmit.co/ana@amjsolutionsgroup.com" 
      method="POST"
      className="space-y-6"
    >
      <input type="hidden" name="_subject" value="New Contact Form Submission - AMJ Solutions Group" />
      <input type="hidden" name="_next" value={thankYouUrl} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      
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
            data-testid="input-role"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="serviceInterest" className="text-sm font-medium text-foreground">
          Service of Interest
        </label>
        <Select 
          name="Service Interest" 
          value={serviceInterest} 
          onValueChange={setServiceInterest}
        >
          <SelectTrigger data-testid="select-service">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Crisis Communications">Crisis Communications</SelectItem>
            <SelectItem value="Reputation Management">Reputation Management</SelectItem>
            <SelectItem value="Media Training">Media Training</SelectItem>
            <SelectItem value="Executive Coaching">Executive Coaching</SelectItem>
            <SelectItem value="Public Affairs & Stakeholder Engagement">Public Affairs & Stakeholder Engagement</SelectItem>
            <SelectItem value="Internal Communications">Internal Communications</SelectItem>
            <SelectItem value="General Inquiry">General Inquiry</SelectItem>
          </SelectContent>
        </Select>
        <input type="hidden" name="Service Interest" value={serviceInterest} />
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
          data-testid="input-message"
        />
      </div>

      <Button
        type="submit"
        className="w-full md:w-auto"
        data-testid="button-submit"
      >
        <Send className="h-4 w-4 mr-2" />
        Send Message
      </Button>
    </form>
  );
}

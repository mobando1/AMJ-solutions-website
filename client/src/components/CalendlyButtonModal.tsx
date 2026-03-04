import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Calendar } from 'lucide-react';

interface CalendlyButtonModalProps {
  buttonText?: string;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
}

export default function CalendlyButtonModal({
  buttonText = 'Book a Consultation',
  variant = 'default',
  size = 'default',
  className = '',
}: CalendlyButtonModalProps) {
  const [open, setOpen] = useState(false);

  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || '';

  const handleClick = () => {
    if (!calendlyUrl) {
      console.log('Calendly URL not configured');
      return;
    }
    setOpen(true);
  };

  return (
    <>
      <Button
        variant={variant}
        size={size}
        onClick={handleClick}
        className={className}
        data-testid="button-calendly-modal"
      >
        <Calendar className="h-4 w-4 mr-2" />
        {buttonText}
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl h-[90vh] sm:h-[80vh]">
          <DialogHeader>
            <DialogTitle>Schedule a Consultation</DialogTitle>
            <DialogDescription>
              Choose a time that works best for you to discuss your communications needs.
            </DialogDescription>
          </DialogHeader>
          <div className="flex-1 overflow-hidden rounded-md border border-border">
            {calendlyUrl ? (
              <iframe
                src={calendlyUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                title="Schedule a consultation"
              />
            ) : (
              <div className="flex items-center justify-center h-full bg-muted/20 p-8 text-center">
                <div className="space-y-2">
                  <Calendar className="h-12 w-12 mx-auto text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Calendly URL pending configuration
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Set VITE_CALENDLY_URL environment variable
                  </p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

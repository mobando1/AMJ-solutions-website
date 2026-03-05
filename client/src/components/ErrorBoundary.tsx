import { Component, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
          <div className="text-center space-y-4 max-w-md">
            <h1 className="text-2xl font-semibold text-foreground">Something went wrong</h1>
            <p className="text-muted-foreground">
              We apologize for the inconvenience. Please try refreshing the page.
            </p>
            <Button onClick={() => window.location.assign('/')}>
              Return to Home
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

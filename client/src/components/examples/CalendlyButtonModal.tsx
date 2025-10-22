import CalendlyButtonModal from '../CalendlyButtonModal';

export default function CalendlyButtonModalExample() {
  return (
    <div className="p-8 space-y-4">
      <CalendlyButtonModal />
      <CalendlyButtonModal variant="outline" buttonText="Schedule Now" />
    </div>
  );
}

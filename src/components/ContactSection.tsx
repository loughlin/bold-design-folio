import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 px-6">
      <div className="container mx-auto max-w-2xl">
        <Card className="hover-lift bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Talk!</h2>
            <p className="mb-6 opacity-90 text-lg">
              Interested in collaborating, speaking opportunities, or just an introduction?
            </p>
            <p className="font-semibold text-xl">jloughlin87@gmail.com</p>
            <p className="text-sm opacity-90 mt-2">712-229-3866</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;

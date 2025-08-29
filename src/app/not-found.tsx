import Button1 from "@/components/Buttons/button1"

export const metadata = {
  title: '404 Not Found - PRECIOUS',
  description: "The official website for Precious. Learn more about us."
};

export default function NotFound() {
    return (
        <div className="text-center mx-auto mb-96">
            <p className="font-[outfit] mt-15 text-lg">404</p>
            <h1 className="text-5xl font-[outfit] mb-24">Page not found</h1>
            <Button1 link="/">
                Continue Shopping
            </Button1>
        </div>
    )
}
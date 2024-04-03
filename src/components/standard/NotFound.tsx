import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export default function NotFound() {

    const handleBack = () => {
        window.history.back();
    }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Card className="p-2 flex flex-col rounded-3xl items-start justify-center w-[400px]  backdrop-blur-xl bg-opacity-30   bg-[var(--cardBackground)] border-[var(--cardBorder)]">
        <CardContent className="mt-2 flex flex-col items-center gap-4 text-white w-full px-2 py-5  ">
          
            <p className="p-3 bg-[#EE7271] font-bold text-3xl rounded-xl w-fit">404 Error</p>

            <p className="text-lg font-medium text-center">
              Oops. Looks like you are in the wrong neighborhood!
            </p>

            <Button
            onClick={handleBack}
            className="flex flex-row gap-1 hover:bg-slate-200 hover:text-tabColorGithub bg-[#262626] p-0 px-2">
              Go back
            </Button>
          
        </CardContent>
      </Card>
    </div>
  );
}

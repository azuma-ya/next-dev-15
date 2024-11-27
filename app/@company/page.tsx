import { Button } from "@/components/ui/button";

const CompanyHomePage = () => {
  return (
    <div>
      <h1>CompanyHomePage</h1>
      <Button variant="link" asChild>
        <a href="/users/1">go to userId</a>
      </Button>
    </div>
  );
};

export default CompanyHomePage;

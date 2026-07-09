import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CustomMiddleware = () => {
  const markdownFilePath = 'BackEnd/Frameworks/ExpressJS/Basics/Middleware/CustomMiddleware';

  return (
    <>
      <PageLayout>
        <PageTitle title="Custom Middleware" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomMiddleware;

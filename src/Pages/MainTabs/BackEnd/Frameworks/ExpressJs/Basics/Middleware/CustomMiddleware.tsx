import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CustomMiddleware = () => {
  const markdownFilePath = 'BackEnd/Frameworks/ExpressJs/Basics/Middleware/CustomMiddleware';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Custom Middleware" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomMiddleware;

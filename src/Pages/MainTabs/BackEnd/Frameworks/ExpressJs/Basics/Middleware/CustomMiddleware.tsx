import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

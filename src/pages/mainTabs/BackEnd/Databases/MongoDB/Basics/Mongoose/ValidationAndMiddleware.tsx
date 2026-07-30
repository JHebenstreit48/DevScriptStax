import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ValidationAndMiddleware = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Basics/Mongoose/ValidationAndMiddleware';

  return (
    <>
      <PageLayout>
        <PageTitle title="Validation & Middleware" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ValidationAndMiddleware;

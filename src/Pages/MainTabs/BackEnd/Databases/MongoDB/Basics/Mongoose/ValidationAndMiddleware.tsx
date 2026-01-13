import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ValidationAndMiddleware = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Basics/Mongoose/ValidationAndMiddleware';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Validation & Middleware" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ValidationAndMiddleware;

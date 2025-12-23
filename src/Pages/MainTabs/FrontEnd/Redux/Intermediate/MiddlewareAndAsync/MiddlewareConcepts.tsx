import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MiddlewareConcepts = () => {
  const markdownFilePath = 'FrontEnd/Redux/Intermediate/MiddlewareAndAsync/MiddlewareConcepts';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Middleware Concepts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MiddlewareConcepts;

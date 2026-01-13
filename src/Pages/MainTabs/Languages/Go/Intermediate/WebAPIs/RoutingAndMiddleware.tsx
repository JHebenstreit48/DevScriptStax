import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RoutingAndMiddleware = () => {
  const markdownFilePath = 'Languages/Go/Intermediate/WebAPIs/RoutingAndMiddleware';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Routing & Middleware" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RoutingAndMiddleware;

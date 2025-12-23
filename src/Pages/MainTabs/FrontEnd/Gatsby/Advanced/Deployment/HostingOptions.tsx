import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HostingOptions = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Advanced/Deployment/HostingOptions';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Hosting Options" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HostingOptions;

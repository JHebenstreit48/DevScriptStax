import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HostingOptions = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Advanced/Deployment/HostingOptions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Hosting Options" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HostingOptions;

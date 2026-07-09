import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SecurityAndAuthentication = () => {
  const markdownFilePath = 'Tools/CICDTools/Jenkins/Advanced/Security/SecurityAndAuthentication';

  return (
    <>
      <PageLayout>
        <PageTitle title="Security & Authentication" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SecurityAndAuthentication;

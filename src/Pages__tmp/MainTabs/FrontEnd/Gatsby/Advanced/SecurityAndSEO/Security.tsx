import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Security = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Advanced/SecurityAndSEO/Security';

  return (
    <>
      <PageLayout>
        <PageTitle title="Security" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Security;

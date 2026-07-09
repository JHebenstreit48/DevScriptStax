import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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

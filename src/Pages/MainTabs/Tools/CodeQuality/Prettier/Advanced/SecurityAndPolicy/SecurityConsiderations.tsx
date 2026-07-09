import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SecurityConsiderations = () => {
  const markdownFilePath = 'Tools/CodeQuality/Prettier/Advanced/SecurityAndPolicy/SecurityConsiderations';

  return (
    <>
      <PageLayout>
        <PageTitle title="Security Considerations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SecurityConsiderations;

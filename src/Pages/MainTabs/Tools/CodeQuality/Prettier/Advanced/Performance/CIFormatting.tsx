import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CIFormatting = () => {
  const markdownFilePath = 'Tools/CodeQuality/Prettier/Advanced/Performance/CIFormatting';

  return (
    <>
      <PageLayout>
        <PageTitle title="CI Formatting" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CIFormatting;

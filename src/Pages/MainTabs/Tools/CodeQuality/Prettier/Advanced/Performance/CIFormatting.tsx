import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CIFormatting = () => {
  const markdownFilePath = 'Tools/CodeQuality/Prettier/Advanced/Performance/CIFormatting';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CI Formatting" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CIFormatting;

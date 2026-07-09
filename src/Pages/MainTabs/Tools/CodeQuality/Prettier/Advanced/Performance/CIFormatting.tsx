import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TsStandard = () => {
  const markdownFilePath = 'Tools/CodeQuality/StandardJS/Basics/TypesAndTS/TsStandard';

  return (
    <>
      <PageLayout>
        <PageTitle title="ts-standard" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TsStandard;

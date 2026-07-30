import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

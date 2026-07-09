import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SourceGen = () => {
  const markdownFilePath = 'Languages/Dart/Advanced/MetaAndAnno/SourceGen';

  return (
    <>
      <PageLayout>
        <PageTitle title="Source Gen" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SourceGen;

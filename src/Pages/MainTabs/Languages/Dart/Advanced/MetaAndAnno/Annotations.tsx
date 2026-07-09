import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Annotations = () => {
  const markdownFilePath = 'Languages/Dart/Advanced/MetaAndAnno/Annotations';

  return (
    <>
      <PageLayout>
        <PageTitle title="Annotations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Annotations;

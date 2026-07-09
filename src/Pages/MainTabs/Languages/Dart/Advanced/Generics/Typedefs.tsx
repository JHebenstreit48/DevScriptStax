import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Typedefs = () => {
  const markdownFilePath = 'Languages/Dart/Advanced/Generics/Typedefs';

  return (
    <>
      <PageLayout>
        <PageTitle title="Typedefs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Typedefs;

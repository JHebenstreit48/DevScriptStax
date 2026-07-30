import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TypeParams = () => {
  const markdownFilePath = 'Languages/Dart/Advanced/Generics/TypeParams';

  return (
    <>
      <PageLayout>
        <PageTitle title="Type Params" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TypeParams;

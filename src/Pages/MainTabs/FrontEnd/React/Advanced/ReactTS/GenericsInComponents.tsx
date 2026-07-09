import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const GenericsInComponents = () => {
  const markdownFilePath = 'FrontEnd/React/Advanced/ReactTS/GenericsInComponents';

  return (
    <>
      <PageLayout>
        <PageTitle title="Generics in Components" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GenericsInComponents;

import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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

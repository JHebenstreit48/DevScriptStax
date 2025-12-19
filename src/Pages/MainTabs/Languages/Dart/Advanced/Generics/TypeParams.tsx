import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TypeParams = () => {
  const markdownFilePath = 'Languages/Dart/Advanced/Generics/TypeParams';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Type Params" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TypeParams;

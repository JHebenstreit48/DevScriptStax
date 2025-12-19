import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ComponentAndFunctionGenerics = () => {
  const markdownFilePath = 'Languages/TypeScript/Advanced/GenericsAndUtilityTypes/ComponentAndFunctionGenerics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Component & Function Generics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ComponentAndFunctionGenerics;

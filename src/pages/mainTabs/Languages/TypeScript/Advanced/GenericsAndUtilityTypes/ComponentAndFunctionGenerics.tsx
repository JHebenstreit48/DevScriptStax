import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ComponentAndFunctionGenerics = () => {
  const markdownFilePath = 'Languages/TypeScript/Advanced/GenericsAndUtilityTypes/ComponentFunction';

  return (
    <>
      <PageLayout>
        <PageTitle title="Component & Function Generics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ComponentAndFunctionGenerics;

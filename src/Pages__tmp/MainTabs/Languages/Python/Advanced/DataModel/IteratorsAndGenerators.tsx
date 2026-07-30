import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const IteratorsAndGenerators = () => {
  const markdownFilePath = 'Languages/Python/Advanced/DataModel/IteratorsAndGenerators';

  return (
    <>
      <PageLayout>
        <PageTitle title="Iterators & Generators" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IteratorsAndGenerators;

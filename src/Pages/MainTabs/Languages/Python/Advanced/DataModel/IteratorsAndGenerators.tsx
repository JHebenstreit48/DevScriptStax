import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IteratorsAndGenerators = () => {
  const markdownFilePath = 'Languages/Python/Advanced/DataModel/IteratorsAndGenerators';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Iterators & Generators" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IteratorsAndGenerators;

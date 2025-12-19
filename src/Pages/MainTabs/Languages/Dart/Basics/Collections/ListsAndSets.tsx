import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ListsAndSets = () => {
  const markdownFilePath = 'Languages/Dart/Basics/Collections/ListsAndSets';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Lists & Sets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ListsAndSets;

import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ListsAndSets = () => {
  const markdownFilePath = 'Languages/Dart/Basics/Collections/ListsAndSets';

  return (
    <>
      <PageLayout>
        <PageTitle title="Lists & Sets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ListsAndSets;

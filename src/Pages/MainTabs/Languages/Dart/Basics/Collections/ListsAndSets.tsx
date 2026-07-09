import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

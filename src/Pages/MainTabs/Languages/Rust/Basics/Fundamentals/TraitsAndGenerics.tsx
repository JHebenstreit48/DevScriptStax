import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TraitsAndGenerics = () => {
  const markdownFilePath = 'Languages/Rust/Basics/Fundamentals/TraitsAndGenerics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Traits & Generics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TraitsAndGenerics;

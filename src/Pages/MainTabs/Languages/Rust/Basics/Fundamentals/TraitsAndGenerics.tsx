import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TraitsAndGenerics = () => {
  const markdownFilePath = 'Languages/Rust/Basics/Fundamentals/TraitsAndGenerics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Traits & Generics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TraitsAndGenerics;

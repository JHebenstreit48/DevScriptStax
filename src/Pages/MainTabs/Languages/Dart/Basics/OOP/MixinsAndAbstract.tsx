import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MixinsAndAbstract = () => {
  const markdownFilePath = 'Languages/Dart/Basics/OOP/MixinsAndAbstract';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Mixins & Abstract" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MixinsAndAbstract;

import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Metaclasses = () => {
  const markdownFilePath = 'Languages/Python/Advanced/Metaprogramming/Metaclasses';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Metaclasses" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Metaclasses;

import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Metaprogramming = () => {
  const markdownFilePath = 'Languages/Ruby/Advanced/Language/Metaprogramming';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Metaprogramming" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Metaprogramming;
